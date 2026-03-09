import { pool, initDb } from "./db";
import { insertTask, listTasks, markDone, deleteTask, findByDone, findByTitle, updateTitle, serchTask } from "./repo";

async function main() {
//   await initDb();

//   await insertTask(pool, "DBの復習をする");
//   await insertTask(pool, "SQLのJOINを練習する");
//   await insertTask(pool, "TypeScriptからCRUDする");

    

     const args = process.argv.slice(1);
     console.log(args[2]);
     console.log(args);
     if( args[1] === "add"){
         await insertTask(pool, args[2]);

     }
     else if( args[1] === "serch") {
         console.table(await findByTitle(pool, args[2]))

     } else if (args[1] === "delete") {
        console.table(await deleteTask(pool, args[2]))
     }
     

//   console.log("=== 追加後 ===");
//   console.table(await listTasks(pool));

//   await markDone(pool, "2", true);

//   console.log("=== id=2 を完了に変更 ===");
//   console.table(await listTasks(pool));

//   await deleteTask(pool, "1");

//   console.log("=== id=1 を削除 ===");
//   console.table(await listTasks(pool));

//   console.table(await findByDone(pool, false));
//   console.table(await findByTitle(pool, "DBの復習をする"));
//   console.table(await updateTitle(pool, "3", "DBの復習をする_更新"));
//   console.table(await deleteTask(pool, "1"));
//   console.table(await deleteTask(pool, "aa"));
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end(); // 接続を閉じる
  });