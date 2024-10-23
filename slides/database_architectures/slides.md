Is a file system all you need to store information?

<img
  src="../assets/database_architectures/imgs/imgs.001.png"
  alt="Overview"
  style="
    width: 800px;
    margin: 0 auto 4rem auto;
    background: transparent;
  "
/>

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
    background: transparent;
  "
/>

---

<span style="color: lightgreen;">Is a file system all you need to store information?</span>

--

No because of the <span style="color: yellow;">no free lunch theorem</span>:

- optimization towards certain tasks are tradeoffs
- optimizing read operations might lead to slower write operations
- faster write operations might lead to slower read operations
- ...

---

<span style="color: lightgreen;">What is a data base and what is it good for?</span>

--

What is a data base?

<img
  src="../assets/database_architectures/imgs/imgs.002.png"
  alt="Overview"
  style="
    width: 800px;
    margin: 0 auto 4rem auto;
    background: transparent;
  "
/>

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

A case study of a row-oriented database

--

<span style="color: green;"> Fast </span>

- accessing data by the row number / row index is fast
  - direct access to memory location
  - e.g. given a data table returning row number 7
- in-memory access of data

--

<span style="color: red;"> Slow </span>

- accessing data by column values can be slow (in row-oriented databases)
  - iterate through rows, read and compare
  - e.g. given a data table with a column _name_ returning the row where _name_ equals Henry
- disk-based access of data

--

Example

Assume we have a <span style="color: yellow;">large data table</span> with _n_ entries:

| row_index | first_name | last_name | age | weight | ... |
| --------- | ---------- | --------- | --- | ------ | --- |
| 1         | Jack       | Sparrow   | 41  | 71     | ... |
| 2         | Hector     | Barbossa  | 63  | 74     | ... |
| 3         | Elizabeth  | Swann     | 32  | 53     | ... |
| ...       | ...        | ...       | ... | ...    | ... |

--

Given a last name, we want to get the relevant row.

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
Auxiliary Table:

- consisting of
  - _last_name_
  - _row_id_
- <span style="color: yellow;">sorted</span> based on _last_name_

--

Binary Search

<img
  src="../assets/database_architectures/imgs/imgs.003.png"
  alt="Overview"
  style="
    width: 1280px;
    margin: 0 auto 4rem auto;
    background: transparent;
  "
/>

--

<span style="color: lightgreen;">What is the complexity?</span>

--

Complexity (Binary Search)

| Time                                            | Space                                      |
| ----------------------------------------------- | ------------------------------------------ |
| <span style="color: yellow;">_O_(log(n))</span> | <span style="color: yellow;">_O_(1)</span> |

--

Tada, that's what we call an index, but

TODO: binary / B Tree search

--

<span style="color: red;">Alert</span>

!!Row index is not the same as an index of a data table!!

--

Remember: no free lunch theorem

<span style="color: lightgreen;">What is the tradeoff?</span>

--

TODO sort algorithm -> homework / group work / paper or exercise

---

#### ACID

- What are ACID transactions?
- Why are they important?
- What are the single parts of ACID?
- What is an example for each of those parts?

<span style="color: lightgreen;">Use any source to answer these questions.</span>

--

---

#### meta data

- schema

---

#### Relational Databases

- many different SQL dialect, we will not learn -> pandas dich dranne

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
