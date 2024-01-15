export type todoList = {
created: Date;
owner: string;
assignment: string;
header: string;
text: string;
openClosed: boolean;
priority: Priority;

}
enum Priority{
    unimportant = "unimportant",
    average = "average",
    urgent = "urgent"
}





const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Who are you? ', (name: string) => {
    console.log(`Hey there ${name}!`);
    readline.close();
  });