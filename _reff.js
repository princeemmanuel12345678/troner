/*CMD
  command: /reff
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: āļø invite friends, š invite friends, š refferrals
CMD*/

let g= Bot.getProperty("refc01")
let l2= Libs.ResourcesLib.userRes("refl2")
let cur= Bot.getProperty("cur")
let zero = Bot.getProperty("zero")
let bonus = Libs.ResourcesLib.userRes("bonus");
let rinv = Libs.ResourcesLib.userRes("refinv");
let pat = Libs.ResourcesLib.userRes("ref");
let res = Libs.ResourcesLib.userRes("ref");
var lr =User.getProperty("up")
let z =User.getProperty("Reffer")
let bann=Bot.getProperty("banuser"+user.telegramid)
if(bann!="banned"){

if(!lr){
User.setProperty("rd","ā No Upline","string")}else{
User.setProperty("rd",lr,"string")}
let gr = User.getProperty("rd")
var buttons = [
[{title: " š° Refferral Earnings History",command:"/htr"}],
    [ {title: "š My Refferral Link", command: "/del" } ]]
Bot.sendInlineKeyboard(buttons,"š„ Refferral Program:\n\nš„ Invite your friends by your reffer link earn free "+cur+"\n\nš - "+g+"%\n\nš¼ My Upline: "+gr +"\n\nš± Refferral Statisticts:\n\nTotal Refferral: "+pat.value()+" \n"+" \nš² Total Refferral Deposits:\n"+rinv.value().toFixed(zero)+" "+cur+"\nš Total Bonus Earned:\n"+bonus.value().toFixed(zero)+" "+cur,{on_result:"/setprop"})}
