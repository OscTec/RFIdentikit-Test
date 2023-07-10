/* A pass can be in one of these 5 states at any given time
 */
export const possible_states = [
	{
		name: 'Draft',
		status_id: 1,
	},
	{
		name: 'Submitted',
		status_id: 2,
	},
	{
		name: 'Approved',
		status_id: 3,
	},
	{
		name: 'Printed',
		status_id: 4,
	},
	{
		name: 'Issued',
		status_id: 5,
	},
]

/* A pass progresses through a series of states. We record the fact a pass
 * reaches a specific state. The 'pass_progress' array contains entries
 * representing a pass' progress through the 5 states.
 *
 * The array doesn't contain an entry for a pass/state combination if the state
 * hasn't been reached. So for example, the pass with pass_id (1) has reached
 * state 'Printed', but not 'Issued', while the pass with pass_id (2) as only
 * reached 'Approved', so there would be no entry for status 5, and 4 & 5
 * respectively.
 *
 */
const pass_progress = [
	{
		pass_id: 1,
		pass_name: 'Lady Gaga',
		status: 'Draft',
		status_id: 1,
	},
	{
		pass_id: 1,
		pass_name: 'Lady Gaga',
		status: 'Submitted',
		status_id: 2,
	},
	{
		pass_id: 1,
		pass_name: 'Lady Gaga',
		status: 'Approved',
		status_id: 3,
	},
	{
		pass_id: 1,
		pass_name: 'Lady Gaga',
		status: 'Printed',
		status_id: 4,
	},
	{
		pass_id: 2,
		pass_name: 'Bon Jovi',
		status: 'Draft',
		status_id: 1,
	},
	{
		pass_id: 2,
		pass_name: 'Bon Jovi',
		status: 'Submitted',
		status_id: 2,
	},
	{
		pass_id: 2,
		pass_name: 'Bon Jovi',
		status: 'Approved',
		status_id: 3,
	},
]

/* We'd like to display the pass/state information to users, and we'd like to
 * highlight which states a pass has reached, but also which states are
 * yet to be reached.
 *
 * Please update the 'merge' function below to accept the two structures, and
 * use them to build and return an array structured like the following. Note
 * the addition of an additional property 'complete'. If a state has been
 * reached, and therefore exists in pass_progress then it will be
 * complete:true, otherwise complete:false.
 *

    [
        {
            pass_id: 1,
            pass_name: 'Lady Gaga',
            states: [{
                status_id: 1,
                status: 'Draft',
                complete: true,
            },
            {
                status_id: 2,
                status: 'Submitted',
                complete: true,
            },
            {
                status_id: 3,
                status: 'Approved',
                complete: true,
            },
            {
                status_id: 4,
                status: 'Printed',
                complete: true,
            },
            {
                status_id: 5,
                status: 'Issued',
                complete: false,
            },
        },
        {
            pass_id: 2,
            pass_name: 'Bon Jovi',
            states: [{
                status_id: 1,
                status: 'Draft',
                complete: true,
            },
            {
                status_id: 2,
                status: 'Submitted',
                complete: true,
            },
            {
                status_id: 3,
                status: 'Approved',
                complete: true,
            },
            {
                status_id: 4,
                status: 'Printed',
                complete: false,
            },
            {
                status_id: 5,
                status: 'Issued',
                complete: false,
            },
        },
    }
*/

export function merge(possible_states, pass_progress) {
	const pass_progresses = []

	pass_progress.forEach((pass) => {
		const { pass_id, pass_name, status_id } = pass

		const pass_progress = pass_progresses.find((item) => item.pass_id === pass_id)

		if (pass_progress) {
			const pass_state = pass_progress.states.find((item) => item.status_id === status_id)
			pass_state.complete = true
		} else {
			const states = possible_states.map((state) => {
				return {
					status_id: state.status_id,
					status: state.name,
					complete: state.status_id === status_id,
				}
			})

			pass_progresses.push({
				pass_id,
				pass_name,
				states,
			})
		}
	})

	return pass_progresses
}

const merged = merge(possible_states, pass_progress)

console.log('Merged', merged)
