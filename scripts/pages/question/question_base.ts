$("/html/body//div[@id='question']") {
  add_class("mw_question_base")
  
  // ADD YOUR CODE BELOW HERE



  // ADD YOUR CODE ABOVE HERE

  move_to("ancestor::body", "top")
}

remove("/html/body/*[not(contains(@class,'mw_question_base' ))]")
