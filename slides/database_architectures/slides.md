Is a file system all you need to store information?

- include figure keynote

Note:
ask for: what is the task of a file system (see next slide)

---

<span style="color: lightgreen;">What is the task of a file system?</span>

--

- bringing <span style="color: yellow;">order</span> to digital chaos
  - files and folders
  - metadata like creation date or file size

--

- <span style="color: yellow;">efficient</span> data <span style="color: yellow;">operation</span>
  - e.g. read in an excel file
  - e.g. make a change and save it

<img
  src="../assets/database_architectures/needle_in_the_haystack.jpg"
  alt="Overview"
  style="
    width: 300px;
    margin: 0 auto 4rem auto;
    padding-right: 5rem;
    background: transparent;
  "
/>

---

What are those operations?

<img
  src="../assets/database_architectures/CRUD_vs_HTTP_METHODS.jpeg"
  alt="Overview"
  style="
    width: 600px;
    margin: 0 auto 4rem auto;
    padding-right: 5rem;
    background: transparent;
  "
/>

---

<span style="color: lightgreen;">Is a file system all you need to store information?</span>

--

No because of the <span style="color: yellow;">no free lunch theorem</span>:

- optimization towards certain tasks are tradeoffs
- optimizing read operations might lead to slower write operations
- faster write operations might lead to faster read operations
- ...

---

<span style="color: lightgreen;">What is a data base and what is it good for?</span>

--

What is a data base?

- TODO: include img keynote

--

What is it good for?

- efficient <span style="color: yellow;">CRUD</span> operations
- <span style="color: yellow;">ACID</span> criteria guarantee
- storage efficiency
- scalability

---

<span style="color: lightgreen;">How can the efficiency of **CRUD** operations be influenced?</span>

--

What is slow and what is fast?

- accessing data by the row number / row index is fast
  - direct access to memory location
  - e.g. given a data table returning row number 7
- accessing data by column values is slow
  - iterate through rows, read and compare
  - e.g. given a data table with a column _name_ returning the row where _name_ equals Henry

--

<span style="color: red;">Alert</span>

!!row index is not the same like an index of a data table!!

---

Example

Assume we have a <span style="color: yellow;">large data table</span> with _n_ entries:

| first_name | last_name | age | weight | ... |
| ---------- | --------- | --- | ------ | --- |
| Jack       | Sparrow   | 41  | 71     | ... |
| Hector     | Barbossa  | 63  | 74     | ... |
| Elizabeth  | Swann     | 32  | 53     | ... |
| ...        | ...       | ... | ...    | ... |

--

We want to get all rows given a last name.

<span style="color: lightgreen;">How can we do that?</span>

--

Most obvious: iterate through the rows one step after another and
check for equality with the given last name

<span style="color: lightgreen;">What is the worst case number of steps we need?</span>

--

Worst case scenario: last name is not in the data table

--

Complexity (Linear Search)

| Time                                       | Space                                      |
| ------------------------------------------ | ------------------------------------------ |
| <span style="color: yellow;">_O_(n)</span> | <span style="color: yellow;">_O_(1)</span> |

--

Short Insertion: <span style="color: lightgreen;">What is the complexity of accessing data by a row number?</span>

--

Time / Space Complexity (Direct Access)

| Time                                       | Space                                      |
| ------------------------------------------ | ------------------------------------------ |
| <span style="color: yellow;">_O_(1)</span> | <span style="color: yellow;">_O_(1)</span> |

--

Back to our example:
<span style="color: lightgreen;">Can we do better?</span>

--

assume our data table is <span style="color: yellow;">sorted</span> according to the last name

--

TODO: binary / B Tree search

--

Remember: no free lunch theorem

<span style="color: lightgreen;">What is the tradeoff?</span>

--

TODO sort algorithm

--

TODO: Real world: B Tree: short explanation and why

--

TODO: Exercise with pandas

---

#### ACID

- group work: 4 groups, each one is studying one of the 4 ACID criteria, explaining it to the course and providing an example
- ACID (https://www.youtube.com/watch?app=desktop&v=GAe5oB742dw&ab_channel=ByteByteGo)

---

#### meta data

- schema

---

#### Relational Databases

---

#### Document Databases

---

#### Key-Value Stores

---

#### Graph Databases

---

#### Others

- Column-Family Databases
- Time-Series Databases
- Object Databases
- Multimodel Databases
- NewSQL Databases

---

#### Comparison Overview
