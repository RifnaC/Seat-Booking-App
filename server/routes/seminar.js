import express from 'express';
import { isAuth } from '../middlewares/isAuth.js';
import { bookSeat, getAllSeminars, getBookingsByDate, getSeminarById } from '../controller/seminarController.js';

const router = express.Router();

// Get all seminars
router.get('/', isAuth, getAllSeminars);

// Book a seat for a seminar
router.get('/:id', isAuth, getSeminarById);
router.post('/book-seat', isAuth, bookSeat);
router.get('/:seminarId/bookings', getBookingsByDate);

export { router as seminarRouter };
