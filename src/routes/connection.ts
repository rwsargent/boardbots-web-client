import express from "express";
import {getClient} from "../bb-client/client";
import {GameRequest, GameResponse, UUID} from "../pb/boardbots_pb";

const router = express.Router();

router.get("/connect", function(req: express.Request, res: express.Response) {
    console.log(req.query.id);
    const gameRequest = new GameRequest();
    const uuid = new UUID();
    uuid.setValue(req.query.id);
    gameRequest.setGameId(uuid);

    // @ts-ignore
    getClient().getGames( gameRequest, (err: any, response: GameResponse) => {
        if (err) {
            console.log(err);
            res.send({error: err});
        }
        res.send({ uuid : response.getGameId().getValue()});
    });
});

export = router;