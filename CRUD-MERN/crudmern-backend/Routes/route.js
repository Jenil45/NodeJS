import express , {Router} from 'express'
import { addPlayer , getPlayers , getPlayerDetail, updatePlayer, deletePlayer} from '../Controller/player-controller.js';

const router = express.Router();

router.post("/addPlayer" , addPlayer)

router.post("/updatePlayer/:id" , updatePlayer)

router.get("/allPlayer" , getPlayers)

router.get("/getPlayerDetail/:id" , getPlayerDetail)

router.delete("/deletePlayer/:id" , deletePlayer)


export default router;
