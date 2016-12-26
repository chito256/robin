package controllers;

import java.io.*;

import javax.servlet.*;
import javax.servlet.http.*;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {

  @RequestMapping(value="/greeting", method=POST)
  public void greeting(@RequestParam(value="username") String name, HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
    PrintWriter out = res.getWriter();
    out.println("Hello, " + name);
  }

}
