package com.robert.werewolfgod.controller;

import com.robert.werewolfgod.vo.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class SocketController {

  @MessageMapping("/user-all")
  @SendTo("/topic/user")
  public Message send(@Payload Message message) {
    return message;
  }
}
