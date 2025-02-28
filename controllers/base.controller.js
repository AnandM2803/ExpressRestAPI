const { StatusCodes } = require("http-status-codes");
class BaseController {
  constructor(repoClass) {
    this.repo = new repoClass();
  }
  //common reponse metods
  ok(res, data) {
    if (!!data) {
      res.status(StatusCodes.OK).send(data);
    } else {
      return res.status(StatusCodes.OK).send({ message: "Ok" });
    }
  }

  created(res,data)
  {
    return res.status(StatusCodes.CREATED).send({message:'Created',data:data});
  }
  unauthorized(res,message)
  {
    return res.status(StatusCodes.UNAUTHORIZED).send({message:'unauthorized'});
  }
  forbidden(res,message)
  {
    return res.status(StatusCodes.FORBIDDEN).send({message:'Forbidden'});
  }
  notFound(res,message)
  {
    return res.status(StatusCodes.NOT_FOUND).send({message:'Not Found'});
  }
  conflict(res,message)
  {
    return res.status(StatusCodes.CONFLICT).send({message:'Conflict'});
  }
  internalServerError(res,error)
  {
    // console.log(error)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:'Inernal Server error'})
  }

  getAll = (req, res) => {
    this.repo
      .findAll()
      .then(docs => {
        return this.ok(res, docs);
      })
      .catch(err => {
        return this.internalServerError(res,err);
      });
  };

  add = (req, res) => {
    const body = req.body;
    // console.log("Received body:", body);
    this.repo
      .create(body)
      .then(doc => {
        return this.created(res,doc);
      })
      .catch(err => {
        return this.internalServerError(res,err)
      });
  };

  update=(req,res)=>{
    let id=req.params.id;
    const body=req.body;
    this.repo.update(body).then(doc=>{
        return this.ok(res,doc);
    }).catch(err=>{
        return this.internalServerError(res,err)
    })
  }
  deleteById=(req,res)=>{
let id=req.params.id;
this.repo.deleteById(id).then(doc=>{
    return this.ok(res,doc);
}).catch(err=>{
    return this.internalServerError(res,err);
})
  }
  getById=(req,res)=>{
    let id=req.params.id;
    this.repo.findById(id).then(doc=>{
        return this.ok(res,doc);
    }).catch(err=>{
        return this.internalServerError(res,err)
    })
  }
}

module.exports = BaseController;
