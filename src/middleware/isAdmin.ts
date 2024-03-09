import { NextFunction, Request, Response } from "express";

 const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.header);
    const isAdminHeader = req.headers['admin'];
    if (isAdminHeader && isAdminHeader === 'true') {
      // Allow access to admin routes
      next();
    } else {
      // Return unauthorized if not an admin
      return res.status(401).send("Unauthorized");
    }
  };

  export default isAdmin;