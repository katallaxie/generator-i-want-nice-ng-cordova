import { Inject } from './inject';

class Controller extends Inject {

	constructor ( ...args ) {
		super( ...args );
		// mapping dependencies
		const { $log } = this.$inject;
		// logging
		$log.info(`${this.constructor.name} is initializing ...`);
	}
}

export default Controller;
export { Controller };
