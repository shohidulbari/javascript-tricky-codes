let group = {
    title: "Our Groups",
    members: ["badhon", "robiul", "sazol", "kabir"],
    showList(){
        this.members.forEach((member) =>{
            console.log(`${this.title} : ${member}`);
        })
    }
}

group.showList();