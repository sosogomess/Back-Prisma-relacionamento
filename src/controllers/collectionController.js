import collectionModel from "../models/collectionModel.js";
import CollectionModel from "../models/collectionModel.js";

class CollectionController {
  // GET /colecoes
  async getAllCollection(req, res) {
    try {
      const colecoes = await CollectionModel.findAll();
      res.json(colecoes);
    } catch (error) {
      console.error("Erro ao buscar as coleções:", error);
      res.status(500).json({ error: "Erro ao buscar as coleções" });
    }
  }

  // GET /api/colecoes/:id
  async getCollectionById(req, res) {
    try {
      const { id } = req.params;

      const colecao = await collectionModel.findById(id);

      if (!colecao) {
        return res.status(404).json({ error: "Coleção não encontrada" });
      }

      res.json(colecao);
    } catch (error) {
      console.error("Erro ao buscar coleção:", error);
      res.status(500).json({ error: "Erro ao buscar coleção" });
    }
  }

  // POST /api/colecoes
  async createCollection(req, res) {
    try {
      // Validação básica
      const {
        name,
        releaseYear,
      } = req.body;

      // Verifica se todos os campos da coleção foram fornecidos
      if (
        !name ||
        !releaseYear 
        
      ) {
        return res
          .status(400)
          .json({ error: "Apenas os campos nome e ano de lançamento são obrigatórios" });
      }

      // Criar uma nova coleção
      const newCollection = await CollectionModel.create(
        name,
        releaseYear,
      
      );

      if (!newCollection) {
        return res.status(400).json({ error: "Erro ao criar coleção" });
      }

      res.status(201).json(newCollection);
    } catch (error) {
      console.error("Erro ao criar coleção:", error);
      res.status(500).json({ error: "Erro ao criar coleção" });
    }
  }

  // PUT /api/coleções/:id
  async updateCollection(req, res) {
    try {
      const { id } = req.params;
      const {
        name,
        description,
        releaseYear,
      } = req.body;

      // Atualizar a coleção
      const updatedCollection = await CollectionModel.update(
        id,
        name,
        description,
        releaseYear,
      );

      if (!updatedCollection) {
        return res.status(404).json({ error: "Coleção não encontrada" });
      }

      res.json(updatedCollection);
    } catch (error) {
      console.error("Erro ao atualizar coleção:", error);
      res.status(500).json({ error: "Erro ao atualizar coleção" });
    }
  }

  // DELETE /api/coleçoes/:id
  async deleteCollection(req, res) {
    try {
      const { id } = req.params;

      // Remover a coleção
      const result = await CollectionModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Coleção não encontrada" });
      }

      res.status(204).end(); // Resposta sem conteúdo
    } catch (error) {
      console.error("Erro ao remover coleção:", error);
      res.status(500).json({ error: "Erro ao remover coleção" });
    }
  }
}

export default new CollectionController();
