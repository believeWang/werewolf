package com.robert.werewolfgod.vo;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public enum Role {
  WEREWOLF("狼人", Boolean.TRUE, Boolean.FALSE, Boolean.FALSE, Faction.WOLF, 2),
  WOLF_KING("狼王", Boolean.TRUE, Boolean.TRUE, Boolean.FALSE, Faction.WOLF, 2),
  GHOST_RIDER("惡靈騎士", Boolean.TRUE, Boolean.FALSE, Boolean.FALSE, Faction.WOLF, 2),
  WOLF_BEAUTY("狼美人", Boolean.TRUE, Boolean.FALSE, Boolean.FALSE, Faction.WOLF, 1),
  GARGOYLE("石像鬼", Boolean.TRUE, Boolean.FALSE, Boolean.FALSE, Faction.WOLF, 1),
  HIDDEN_WOLF("隱狼", Boolean.TRUE, Boolean.FALSE, Boolean.FALSE, Faction.WOLF, 2),
  CIVILIAN("平民", Boolean.FALSE, Boolean.FALSE, Boolean.FALSE, Faction.PEOPLE, -1),
  WITCH("女巫", Boolean.TRUE, Boolean.FALSE, Boolean.FALSE, Faction.GOD, 3),
  HUNTER("獵人", Boolean.FALSE, Boolean.FALSE, Boolean.FALSE, Faction.GOD, -1),
  KNIGHT("騎士", Boolean.FALSE, Boolean.TRUE, Boolean.FALSE, Faction.GOD, -1),
  GUARD("守衛", Boolean.FALSE, Boolean.FALSE, Boolean.FALSE, Faction.GOD, 5),
  PROPHET("預言家", Boolean.FALSE, Boolean.FALSE, Boolean.FALSE, Faction.GOD, 4),
  MORON("白癡", Boolean.FALSE, Boolean.TRUE, Boolean.FALSE, Faction.GOD, -1),
  TOMB_KEEPER("守墓人", Boolean.FALSE, Boolean.FALSE, Boolean.FALSE, Faction.GOD, 1),
  ;

  private String roleName;
  private Boolean chooseNightFlag;
  private Boolean chooseDayFlag;
  private Boolean chooseDeadFlag;
  private Faction faction;
  private int sort;


}
