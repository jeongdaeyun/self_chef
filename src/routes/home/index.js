"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/select", ctrl.output.select);
router.get("/setting", ctrl.output.setting);
router.get("/community", ctrl.output.community);
router.get("/mypage", ctrl.output.mypage);
router.get("/write", ctrl.output.write);
router.get("/mypage_setting", ctrl.output.mypage_setting);
router.get("/soycrab", ctrl.output.soycrab);
router.get("/kimchijjigae", ctrl.output.kimchijjigae);
router.get("/speedpage", ctrl.output.speedpage);
router.get("/eggcustard", ctrl.output.eggcustard);
router.get("/K_stew", ctrl.output.K_stew);
router.get("/mypage2", ctrl.output.mypage2);
router.get("/setting2", ctrl.output.setting2);
router.get("/salad", ctrl.output.salad);
router.get("/mealplanner", ctrl.output.mealplanner);
router.get("/graph", ctrl.output.graph);
router.get("/mealplanner2", ctrl.output.mealplanner2);
router.get("/graph2", ctrl.output.graph2);
//외부로 내보내기
module.exports = router;