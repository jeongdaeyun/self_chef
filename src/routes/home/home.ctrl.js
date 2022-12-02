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
    community: (req, res) => {
        res.render("home/community");
    },
    Mypage: (req, res) => {
        res.render("home/Mypage");
    },

    comein: (req, res) => {
        res.render("home/comein");
    },
};

module.exports = {
    output,
};