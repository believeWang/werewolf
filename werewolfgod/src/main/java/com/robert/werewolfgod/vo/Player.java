package com.robert.werewolfgod.vo;

import java.util.ArrayList;
import java.util.List;

public class Player {

  //玩家編號
  private int playerNo;

  //是否存活
  private Boolean isSurvive;

  //角色
  private Role role;

  //投票紀錄
  private List<Integer> voteRecords = new ArrayList<>();

}
