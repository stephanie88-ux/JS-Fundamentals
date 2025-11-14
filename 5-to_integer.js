const arg = Process.argv[2];
const num = Number(arg);

if (Number.isNaN) {
    console.log("Not a number");
} else {
    console.log("My number " + num);
}