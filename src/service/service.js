// async function pingCheck(){
//     return 'pong';
// }

class TestService{
    constructor(){

    };

    pingCheck(){
    return 'heeeeey';
}
}

const v1 = new TestService();
console.log(v1.pingCheck());
module.exports = TestService;
