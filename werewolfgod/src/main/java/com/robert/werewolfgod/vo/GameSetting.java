package com.robert.werewolfgod.vo;

import java.util.ArrayList;
import java.util.List;

public class GameSetting {

  //玩家人數
  private int playerCnt = 10;

  //平民人數
  private int peopleCnt = 3;

  //神人數
  private int godCnt = 4;

  //狼人數
  private int wolfCnt = 3;

  //角色配置
  private List<Role> roles = new ArrayList<>();

  //女巫自救
  private Boolean canWitchSelfSave = Boolean.TRUE;

  //狼人自爆
  private Boolean canWolfExplodeAnyTime = Boolean.FALSE;

  //警長
  private Boolean canSheriff = Boolean.FALSE;


}
