import { merge, possible_states } from '../src/main.js'

describe('merge', () => {
  it('should return an a pass_progresses array', () => {
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
      }
    ]

    expect(merge(possible_states, pass_progress)).toStrictEqual([
      {
        pass_id: 1,
        pass_name: 'Lady Gaga',
        states: [
          {
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
            complete: false,
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
        ],
      },
    ])
  })
})
