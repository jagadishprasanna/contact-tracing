import { RequestHandler } from 'express';

import { Todo } from '../models/todo';
import "reflect-metadata";
import { Service } from ".././service";
import DIContainer from ".././di-container";
import { User } from "../Implementations/UserRegister";
import { IUser } from "../Interfaces/IUserRegister";
import {plainToClass} from "class-transformer";


const service: Service = DIContainer.resolve<Service>(Service);

const userDataSource: User.UserRegister = DIContainer.resolve<IUser.IUserRegister>(User.UserRegister);


export const createUser: RequestHandler = (req, res, next) => {
  
  let user = plainToClass(IUser.UserData, req.body as IUser.UserData);
  console.log(user);
  userDataSource.registerUser(user);
  res.status(201).json({ message: 'Created the User.', createdUser:user  });
};

export const getUser: RequestHandler = (req, res, next) => {
 // res.json({ todos: TODOS });
};

