    
/*
Import the extrnal libraries:
- winston
*/
import { createLogger, format, transports } from 'winston';

const { align, label, combine, colorize, timestamp , printf } = format;
const logger = createLogger({
    format: combine(
      colorize(),
      timestamp(),
      align(),
      printf((info) => {
        const {
          timestamp, level, message, ...args
        } = info;
    
        const ts = timestamp.slice(0, 19).replace('T', ' ');
        return `${ts} [${level}]: ${message} ${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''}`;
      }),
    ),
    transports: [
      new transports.Console(),
      new transports.File({ filename: './error.log' , level: 'error' }),
      new transports.File({ filename: './info.log' , level: 'info' }),
    ],
    exitOnError: false,
});
export default logger;