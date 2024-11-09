const pool = require('./db');


exports.createTimes = async (req, res) => {
  const { nome, pais, divisao } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO Times (nome, pais, divisao) VALUES ($1, $2, $3) RETURNING *',
      [nome, pais, divisao]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar times' });
  }
};

exports.getAllTimes = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM times');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao obter times' });
  }
};

exports.deleteTimes = async (req, res) => {
    try {
      const result = await pool.query('DELETE FROM Times where id = $1'[id]);
      res.status(200).json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao deletar times' });
    }
  };
