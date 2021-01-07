package com.robert.werewolfgod.vo;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class GameRecord {

  //遊戲設定
  private GameSetting setting;

  //遊戲狀態
  private Status status;

  //玩家
  private Player players;

  //房間代碼
  private String roomCode;

  //回合
  private int round;

  //創立時間
  private LocalDateTime createTime;
}
