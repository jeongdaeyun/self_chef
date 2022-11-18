"use strict";


const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },  
    
    select: (req, res) => {
        res.render("home/select");
    },
    setting: (req, res) => {
        res.render("home/setting");
    },
};

module.exports = {
    output,
};