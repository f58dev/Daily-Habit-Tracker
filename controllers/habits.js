const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

router.get('/', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        res.render('habits/index.ejs', {
            habits: currentUser.habits,
        });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

router.get('/new', async (req, res) => {
    res.render('habits/new.ejs');
});

router.post('/', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        currentUser.habits.push(req.body);
        await currentUser.save();
        res.redirect(`/users/${currentUser._id}/habits`);
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

router.get('/:habitId', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        const habit = currentUser.habits.id(req.params.habitId);
        res.render('habits/show.ejs', {
            habit: habit,
        });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

router.delete('/:habitId', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        currentUser.habits.id(req.params.habitId).deleteOne();
        await currentUser.save();
        res.redirect(`/users/${currentUser._id}/habits`);
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

router.get('/:habitId/edit', async (req, res) => {  // Fixed the parameter name here
    try {
        const currentUser = await User.findById(req.session.user._id);
        const habit = currentUser.habits.id(req.params.habitId);
        if (!habit) {
            return res.status(404).send('Habit not found');
        }
        res.render('habits/edit.ejs', {
            habit: habit,
        });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

router.put('/:habitId', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        const habit = currentUser.habits.id(req.params.habitId);
        if (!habit) {
            return res.status(404).send('Habit not found');
        }
        habit.set(req.body);
        await currentUser.save();
        res.redirect(`/users/${currentUser._id}/habits/${req.params.habitId}`);
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

module.exports = router;
