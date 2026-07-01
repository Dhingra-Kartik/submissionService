


async function pingRequest(req, res){
console.log("FROM CONTROLLER", this.testService); //every controller => has an fastify object

    // const response = await testService.pingCheck();
    const response = await this.testService.pingCheck();
    return res.send({data: "Hey controller layer is up"})
}

module.exports = { 
    pingRequest 
};