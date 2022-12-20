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

  community: (req, res) => {
    res.render("home/community");
  },

  mypage: (req, res) => {
    res.render("home/mypage");
  },

  write: (req, res) => {
    res.render("home/write");
  },

  mypage_setting: (req, res) => {
    res.render("home/mypage_setting");
  },

  soycrab: (req, res) => {
    res.render("home/soycrab");
  },

  kimchijjigae: (req, res) => {
    res.render("home/kimchijjigae");
  },

  speedpage: (req, res) => {
    res.render("home/speedpage");
  },

  eggcustard: (req, res) => {
    res.render("home/eggcustard");
  },

  K_stew: (req, res) => {
    res.render("home/K_stew");
  }    
  
};

module.exports = {
    output,
};