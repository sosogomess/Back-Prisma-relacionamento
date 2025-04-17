import express from "express";
import CollectionController from "../controllers/collectionController.js";

const collectionRouter = express.Router();

// Rotas de colecoes
// GET /coleções - Listar todos os Personagens
collectionRouter.get("/", CollectionController.getAllCollection);

// // GET /colecoes/:id - Obter um Personagem pelo ID
collectionRouter.get("/:id", CollectionController.getCollectionById);

// // POST /colecoes - Criar um novo Personagem
collectionRouter.post("/", CollectionController.createCollection);

// // PUT /colecoes/:id - Atualizar um Personagem
collectionRouter.put("/:id", CollectionController.updateCollection);

// // DELETE /colecoes/:id - Remover um Personagem
collectionRouter.delete("/:id", CollectionController.deleteCollection);

export default collectionRouter;

