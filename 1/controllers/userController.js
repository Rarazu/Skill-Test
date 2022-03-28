const { response } = require("express")
const { request } = require("express")
const md5 = require(`md5`)

let modelUser = require(`../models/index`).user

exports.getDataUser = (request, response) => {
    modelUser.findAll()
    .then(result => {
        return response.json(result)
    })
    .catch( error => {
        message: error.message
    })
}

exports.addDataUser = (request, response) => {
    let newUser = {
        username: request.body.username,
        password: md5(request.body.password)
    }

    modelUser.create(newUser)
    .then(result => {
        return response.json({
            message: `Data user berhasil ditambah`
        })
    })
    .catch( error => {
        message: error.message
    })
}

exports.authentication = async(request, response) => {
    let data = {
        username: request.body.username,
        password: md5(request.body.password)
    }

    //validasi (cek data di tabel user)
    let result = await modelUser.findOne({where: data})

    if (result) {
        return response.json({
            rc: "00",
            rd: "Sukses"
        })
    } else{
        // data tidak ditemukan
        return response.json({
            rc: "01",
            rd: `Invalid user\/password`
        })
    }
}