import { merge, possible_states } from '../src/main.js'

describe('merge', () => {
  it('should return an empty array when empty pass_progress passed in', () => {
    const pass_progress = []

    expect(merge(possible_states, pass_progress)).toEqual([])
  })

  it('should return an a pass_progresses array of one object when one pass_id are passed in', () => {
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

  it('should return an a pass_progresses array of two objects when two different pass_id are passed in', () => {
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
      {
        pass_id: 2,
        pass_name: 'Bon Jovi',
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
        ],
      },
    ])
  })

  it('should return an a complete set of pass_progress when a complete pass_progress is passed in', () => {
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
        name: 'Approved',
        status_id: 3,
      },
      {
        pass_id: 1,
        pass_name: 'Lady Gaga',
        name: 'Printed',
        status_id: 4,
      },
      {
        pass_id: 1,
        pass_name: 'Lady Gaga',
        name: 'Issued',
        status_id: 5,
      },
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
            complete: true,
          },
        ],
      },
    ])
  })
})
