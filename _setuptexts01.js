/*CMD
  command: /setuptexts01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ad=Bot.getProperty("admin01")
let id=User.getProperty("adminmsgid")
if(chat.chatid==user.telegramid){
var b=[
[{title:"â Welcome Text",command:"/welctext01admin"}],
[{title:"ð± Acount Button Text",command:"/confirmacountbuttontext01"}],
[{title:"ð¤  Withdrawals Channel Text",command:"/adminautopost01"}],
[{title:"ð Deposits Channel Text ",command:"/depositchanneltextadmin01"}],
[{title:" â¹ï¸Info button Text",command:"/admininfotext01"}],[{title:"âï¸ FAQ button Text",command:"/adminfaqtext01"}],
[{title:"â¬ï¸ Back To Settings", command:"/adminlogin r"}]]

var b2=[
[{text:"â Welcome Text",callback_data:"/welctext01admin"}],
[{text:"ð± Acount Button Text",callback_data:"/confirmacountbuttontext01"}],
[{text:"ð¤  Withdrawals Channel Text",callback_data:"/adminautopost01"}],
[{text:"ð Deposits Channel Text ",callback_data:"/depositchanneltextadmin01"}],
[{text:"ð Statisticts Button Text",callback_data:"/textforstatistictsbutton01"}],
[{text:" â¹ï¸Info button Text",callback_data:"/admininfotext01"}],[{text:"âï¸ FAQ button Text",callback_data:"/adminfaqtext01"}],
[{text:"â¬ï¸ Back To Settings", callback_data:"/adminlogin r"}]]
let txt='<a href="'+'tg://user?id='+user.telegramid+'">'+user.first_name+'</a>'+" <b>Select and option from the list bellow that you want to change</b>"
Api.editMessageText({chat_id:chat.chatid,text:txt,message_id:id,parse_mode:"html",reply_markup:{inline_keyboard:b2}})
}else{
Bot.runCommand("/start")
}
