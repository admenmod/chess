'use strict';
ns['chess'] = new function() {
	const { GridMap } = ns['system'];


	const WIDTH = 8;
	const HIEGHT = 8;

	const type = {
		PAWN: 1,
		QUEEN: 7,
		KING: 6,
		ROOK: 5,
		HORSE: 4,
		OFFICER: 3,
		BORDER: -1,
		SPACE: 0
	};



	const Board = this.Board = class {
		constructor(p = {}) {
			this.pos = (p.pos||vec2()).buf();
			this.size = (p.size||vec2()).buf();


			this.field = [
				5, 4, 3, 6, 7, 3, 4, 5,
				1, 1, 1, 1, 1, 1, 1, 1,
				0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0,
				1, 1, 1, 1, 1, 1, 1, 1,
				5, 4, 3, 7, 6, 3, 4, 5
			];

			this.grid = new GridMap();
			this.updateSize();
		}

		updateSize() {
			this.grid.size.set(this.size);
			this.grid.tile.set(this.size).div(8);
		}

		getByPos(pos) {
			if(pos.x < 0 || pos.x > WIDTH || pos.y < 0 || pos.y > HIEGHT) return type.BORDER;
			return this.field[pos.y][pos.x];
		}

		tryMoveToPos(type, pos, target) {
			if(type === type.ROOK) {
				
			};
		}

		_line_tryMoveToRight(pos, target) {
			let sign = Math.sign(target.x - pos.x);
			let res = pos.buf();

			for(let i = 0; i < WIDTH && res.x === target.x; res.x += sign, ++i) {
				if(this.getByPos(res) === type.BORDER) {
					res.x -= sign;
					break;
				};

				if(this.getByPos(res) !== type.SPACE) break;
			};

			return res;
		}

		// getWayByOfPos(pos) { }

		walk(pos, target) {
			this.tryMoveToPos(this.getByPos(pos), pos, target);
		}

		draw(ctx, pos = Vector2.ZERO) {
			ctx.save();

			this.grid.draw(ctx, pos);

			ctx.restore();
		}
	};


	const board = new Board();

	board.move(vec2(1, 1), vec2(1, 2));
};

