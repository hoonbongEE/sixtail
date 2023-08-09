const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const router = express.Router();

const BoardsController = require('../controller/boardController');
const boardsController = new BoardsController();

router.post('/', authMiddleware, boardsController.createBoard); // 보드 생성
router.put('/:boardId', authMiddleware, boardsController.putBoard); // 보드 수정
router.delete('/:boardId', authMiddleware, boardsController.deleteBoard); // 보드 삭제
router.get('/:boardId', authMiddleware, boardsController.getBoardAuth); // 보드 조회
router.post('/auth/:boardId', authMiddleware, boardsController.grantPermission); //보드 권한 설정

module.exports = router;
