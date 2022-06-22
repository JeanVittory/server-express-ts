import { connection } from "./../database/database";
import { Request, Response } from "express";

const getLanguage = async (request: Request, response: Response) => {
  try {
    const connect = await connection;
    const result = await connect.query("select * from language");
    response.json(result);
  } catch (error: any) {
    response.json({
      status: 500,
      mesaage: error.message,
    });
  }
};

const postLanguage = async (request: Request, response: Response) => {
  try {
    const { name, programmers } = request.body;
    if (!name || !programmers) {
      response.status(400);
      response.json({ mesagge: "Bad request" });
    }
    const data = { name, programmers };
    const connect = await connection;
    await connect.query("insert into language set ?", data);
    response.json({ status: 200, message: "Language added  " });
  } catch (error: any) {
    response.json({
      status: response.status(500),
      message: error.message,
    });
  }
};

const getLanguageByParams = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const connector = await connection;
    const result = await connector.query(
      "select * from language where id = ?",
      id
    );
    if (!result.length) {
      response.status(404);
      response.json({ message: "not found" });
    }
    response.json(result);
  } catch (error: any) {
    response.json({
      status: 500,
      message: error.message,
    });
  }
};

const deleteLanguage = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const conector = await connection;
    await conector.query("delete from language where id = ?", id);
    response.json({
      status: 200,
      message: "Language deleted",
    });
  } catch (error: any) {
    response.json({
      status: 500,
      message: error.message,
    });
  }
};

const updateLanguage = async (request: Request, response: Response) => {
  try {
    const { name, programmers } = request.body;
    const { id } = request.params;
    if(!id || !name || !programmers){
      response.json({
        status: 400,
        message: "Bad Request"
      })
    } 
    const data = { name, programmers};
    const conector = await connection;
    await conector.query(
      "update language set ? where id = ?",
      [data, id]
    );
    response.json({
      status: 200,
      message: "Language updated"
    })
  } catch (error:any) {
    response.json({
      status: 500,
      message: error.message
    })
  }
};

export {
  getLanguage,
  postLanguage,
  getLanguageByParams,
  deleteLanguage,
  updateLanguage,
};
