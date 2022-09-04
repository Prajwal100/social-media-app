import { Request, Response } from "express";
import User from "../models/user";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config";
const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, password } = req.body;

    const user: any = await User.findOne({ email: email });

    // check user exists;
    if (!user) {
      return res.status(404).send({
        status: false,
        message: "Account does not exists. Please register.",
      });
    }

    // password validation;
    const passwordIsValid = bcryptjs.compare(password, user.password);
    if (!passwordIsValid) {
      return res.status(400).send({
        status: false,
        message: "Invalid credentials. Please try again.",
      });
    }

    // generate token;
    const token = jwt.sign({ id: user._id }, config.jwt.SECRET, {
      expiresIn: config.jwt.TOKEN_TTL,
      issuer: config.jwt.ISSUER,
    });

    // response user
    const resUser = user.toObject();
    delete resUser.password;

    return res.status(200).json({
      status: true,
      message: "Successfully login.",
      accessToken: token,
      user: resUser,
    });
  } catch (e) {
    res.status(400).json({
      status: false,
      message: e.message,
    });
  }
};

const register = async (req: Request, res: Response): Promise<Response> => {
  try {
    console.log(req.body);
    const { firstName, lastName, username, email, password } = req.body;

    const user_exist = await User.findOne({ email: email });
    if (user_exist) {
      return res
        .status(409)
        .send({
          status: false,
          message: "User already exists with this email.",
        });
    }

    const user = await User.create({
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: bcryptjs.hashSync(password),
    });

    // generate token;
    const token = jwt.sign({ id: user._id }, config.jwt.SECRET, {
      expiresIn: config.jwt.TOKEN_TTL,
      issuer: config.jwt.ISSUER,
    });
    // response user
    const resUser = user.toObject();
    delete resUser.password;

    return res.status(200).json({
      status: true,
      message: "Successfully create account.",
      accessToken: token,
      user: resUser,
    });
  } catch (e) {
    res.status(400).json({
      status: false,
      message: e.message,
    });
  }
};

export = {
  login,
  register,
};
