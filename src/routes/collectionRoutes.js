import express from "express";
import CollectionController from "../controllers/collectionController.js";

const collectionRouter = express.Router();

// Rotas de colecoes
// GET /coleções - Listar todos os Personagens
collectionRouter.get("/", CollectionController.getAllCollection);

// // GET /colecoes/:id - Obter um Personagem pelo ID
// colecoesRouter.get("/:id", PersonagemController.getPersonagemById);

// // POST /colecoes - Criar um novo Personagem
colecoesRouter.post("/", CollectionController.createCollection);

// // PUT /colecoes/:id - Atualizar um Personagem
// colecoesRouter.put("/:id", PersonagemController.updatePersonagem);

// // DELETE /colecoes/:id - Remover um Personagem
// colecoesRouter.delete("/:id", PersonagemController.deletePersonagem);

export default collectionRouter;
