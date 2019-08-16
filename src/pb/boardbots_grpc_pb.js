// GENERATED CODE -- DO NOT EDIT!

"use strict";
var grpc = require("grpc");
var boardbots_pb = require("./boardbots_pb.js");
var google_protobuf_timestamp_pb = require("google-protobuf/google/protobuf/timestamp_pb.js");

function serialize_GameRequest(arg) {
    if (!(arg instanceof boardbots_pb.GameRequest)) {
        throw new Error("Expected argument of type GameRequest");
    }
    return Buffer.from(arg.serializeBinary());
}

function deserialize_GameRequest(buffer_arg) {
    return boardbots_pb.GameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GameResponse(arg) {
    if (!(arg instanceof boardbots_pb.GameResponse)) {
        throw new Error("Expected argument of type GameResponse");
    }
    return Buffer.from(arg.serializeBinary());
}

function deserialize_GameResponse(buffer_arg) {
    return boardbots_pb.GameResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BoardbotsServiceService = exports.BoardbotsServiceService = {
    getGames: {
        path: "/BoardbotsService/GetGames",
        requestStream: false,
        responseStream: false,
        requestType: boardbots_pb.GameRequest,
        responseType: boardbots_pb.GameResponse,
        requestSerialize: serialize_GameRequest,
        requestDeserialize: deserialize_GameRequest,
        responseSerialize: serialize_GameResponse,
        responseDeserialize: deserialize_GameResponse,
    },
};

exports.BoardbotsServiceClient = grpc.makeGenericClientConstructor(BoardbotsServiceService);
