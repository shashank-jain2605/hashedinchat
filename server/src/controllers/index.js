import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenCookie from "../utils/generateToken.js";
import Conversation from "../models/Conversation.model.js";
import Message from "../models/message.model.js";
import mongoose from "mongoose";

export const signup = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("req-->", req);
    console.log("body-->", req.body);

    const user = await User.findOne({ username });
    if (user) {
      res.status(400).json(error, "user already exist");
    }
    // hasing pwd:
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ username, password: hashedPassword });
    generateTokenCookie(newUser._id, res);
    await newUser.save();
    res.status(201).json({ msg: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!user || !isPasswordCorrect) {
      res.status(400).json(error, "invalid credentials");
    }
    generateTokenCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      username: user.username,
      password: user.password,
    });
  } catch (error) {
    console.error("Error loging user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// messages
export const sendMessage = async (req, res) => {
  const { message } = req.body;
  const { id: receiverId } = req.params;
  console.log("userzxc", req.user);
  const senderId = req.user._id.toString();

  console.log("senderId", senderId, receiverId);

  let conversation = await Conversation.findOne({
    participants: { $all: [senderId, receiverId] },
  });

  if (!conversation) {
    conversation = await Conversation.create({
      participants: [senderId, receiverId],
    });
  }

  const newMessage = new Message({
    senderId,
    receiverId,
    message,
  });

  if (newMessage) {
    conversation.messages.push(newMessage._id);
  }
  await conversation.save();
  await newMessage.save();

  res.status(201).json(newMessage);
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.error("Error loging user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// users:
export const getUsers = async (req, res) => {
  console.log("req", req.user);
  try {
    const loggedInUserId = req.user._id;
    const allUsers = await User.find({ _id: { $ne: loggedInUserId } });
    res.status(200).json(allUsers);
  } catch (error) {
    console.error("Error getting user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
