package com.robert.werewolfgod.controller;

import com.robert.werewolfgod.vo.Message;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
@Slf4j
public class SocketController {
  private final SimpMessagingTemplate messagingTemplate;

  public SocketController(
      SimpMessagingTemplate messagingTemplate) {
    this.messagingTemplate = messagingTemplate;
  }

//  @MessageMapping("/user-all")
//  @SendTo("/topic/user")
//  public Message send(@Payload Message message) {
//    return message;
//  }


  @MessageMapping("/room/{roomNo}")
  public void handleRoom(@DestinationVariable String roomNo, @Payload Message message) {
    log.info(roomNo);
    messagingTemplate.convertAndSend("/topic/user/" + roomNo, message);
  }
}
