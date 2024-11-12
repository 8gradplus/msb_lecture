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

Note:

Give an intuitive understanding of `the big O notation`

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

<img
  src="../assets/database_architectures/imgs/imgs.004.png"
  alt="Overview"
  style="
    width: 2400px;
    margin: 0px 0px 0px 0px;
    padding-right: 0rem;
    background: transparent;
  "
/>

---

<h3><span style="color: orange;">ACID</span></h>

---

- What are ACID transactions?
- Why are they important?
- What are the single parts of ACID?
- What is an example for each of those parts?

<span style="color: lightgreen;">Use any source to answer these questions.</span>

---

<span style="color: orange;">**Atomicity**</span>

--

<img
  src="../assets/database_architectures/imgs/imgs.005.png"
  alt="Overview"
  style="
    width: 2400px;
    margin: 0px 0px 0px 0px;
    padding-right: 0rem;
    background: transparent;
  "
/>

--

<img
  src="../assets/database_architectures/imgs/imgs.006.png"
  alt="Overview"
  style="
    width: 2400px;
    margin: 0px 0px 0px 0px;
    padding-right: 0rem;
    background: transparent;
  "
/>

--

<span style="color: orange;">Atomicity</span> ensures that a transaction is treated as a single, indivisible unit of work. Either all the changes made by the transaction are committed to the database, or none of them are.

---

<span style="color: orange;">**Consistency**</span>

--

<img
  src="../assets/database_architectures/imgs/imgs.007.png"
  alt="Overview"
  style="
    width: 2400px;
    margin: 0px 0px 0px 0px;
    padding-right: 0rem;
    background: transparent;
  "
/>

--

<img
  src="../assets/database_architectures/imgs/imgs.008.png"
  alt="Overview"
  style="
    width: 2400px;
    margin: 0px 0px 0px 0px;
    padding-right: 0rem;
    background: transparent;
  "
/>

--

<span style="color: orange;">Consistency</span> ensures that a transaction brings the database from one valid state to another. The integrity constraints and rules defined for the database are maintained before and after the transaction.

---

<span style="color: orange;">**Isolation**</span>

--

<img
  src="../assets/database_architectures/imgs/imgs.009.png"
  alt="Overview"
  style="
    width: 2400px;
    margin: 0px 0px 0px 0px;
    padding-right: 0rem;
    background: transparent;
  "
/>

--

<span style="color: orange;">Isolation</span> ensures that the execution of one transaction is isolated from the execution of other transactions.

---

<span style="color: orange;">**Durability**</span>

--

<img
  src="../assets/database_architectures/imgs/imgs.010.png"
  alt="Overview"
  style="
    width: 2400px;
    margin: 0px 0px 0px 0px;
    padding-right: 0rem;
    background: transparent;
  "
/>

--

<span style="color: orange;">Durability</span> ensures that once a transaction is committed, its effects persist even in the event of system failures. The changes made by a committed transaction are permanent and survive system crashes or power outages.

---

<h3><span style="color: orange;">Meta data</span></h>

---

<span style="color: lightgreen;">Prepare for a little question round using the wikipedia article about [metadata](https://en.wikipedia.org/wiki/Metadata)</span>!

--

<span style="color: lightgreen;">Describe in your own words what metadata is. Is it exclusively defined for databases?</span>

--

<span style="color: lightgreen;">What categories exist and are they relevant for databases? Try to find examples regarding databases.</span>

--

<span style="color: lightgreen;">...</span>

--

<img
  src="../assets/database_architectures/imgs/imgs.011.png"
  alt="Overview"
  style="
    width: 2400px;
    margin: 0px 0px 0px 0px;
    padding-right: 0rem;
    background: transparent;
  "
/>

[Source](https://databasetown.com/what-is-database-metadata-examples-types/)

---

<h3><span style="color: orange;">Primary and Foreign Keys</span></h>

---

<span style="color: orange;">**Primary Keys**</span>

... typically a **unique** index, but why?

--

<span style="color: orange;">Ensuring Uniqueness</span>

- A primary key uniquely identifies each row in a table, ensuring that there are no duplicate rows. This is crucial for tables that represent entities with distinct identities (e.g., users, products, orders), as it helps prevent data redundancy and ambiguity.
- Without a primary key, it can be challenging to distinguish between records, particularly if two or more rows have identical values across all columns.

--

<span style="color: orange;">Referential Integrity</span>

- When other tables reference a table, they often use a **foreign key** that points to the primary key in that table.
- Without a primary key, linking data across multiple tables becomes inconsistent and complex, as there’s no guaranteed, unique identifier to reference.

--

<span style="color: orange;">Efficient Data Access</span>

- e.g. PostgreSQL automatically creates a unique index for the primary key column(s). This index improves the efficiency of lookups, making retrieval of specific records faster.
- If you need to search for specific rows frequently, particularly in large tables, the primary key index allows PostgreSQL to quickly locate rows, improving performance.

--

<span style="color: orange;">Update and Delete Operations</span>

- Primary keys simplify and safeguard update and delete operations. For instance, if you want to delete a specific row, a primary key provides a unique reference.
- Without a primary key, you may end up deleting or updating multiple rows unintentionally if they share identical values across columns.

--

<span style="color: orange;">Avoiding Data Anomalies</span>

- Without a primary key, the database lacks a strong enforcement mechanism for ensuring each row’s uniqueness, which can lead to data anomalies. These anomalies can cause issues in reporting, data aggregation, and business logic implementation.

--

Remember the table:

| row_index | first_name | last_name | age | weight |
| --------- | ---------- | --------- | --- | ------ |
| 1         | Jack       | Sparrow   | 41  | 71     |
| 2         | Hector     | Barbossa  | 63  | 74     |
| 3         | Elizabeth  | Swann     | 32  | 53     |
| ...       | ...        | ...       | ... | ...    |

<span style="color: lightgreen;">What column would you choose as the primary index? Why?</span>

---

<span style="color: orange;">**Foreign Keys**</span>

... is used in relational databases like PostgreSQL to establish and enforce relationships between tables, ensuring referential integrity across your data.

--

<span style="color: orange;">Maintaining Referential Integrity</span>

- A foreign key in one table points to a primary key (or unique key) in another table, creating a link between the two. This link enforces referential integrity by ensuring that records in the referencing table (the one with the foreign key) correspond to valid records in the referenced table.

--

<span style="color: orange;">Preventing Orphaned Records</span>

- Foreign keys prevent orphaned records by enforcing that any record in a child table must have a corresponding record in the parent table. Without a foreign key constraint, it’s possible to delete or update data in the parent table without updating the child, leading to orphaned records (child records without a valid parent).

--

<span style="color: orange;">Enforcing Data Consistency Across Tables</span>

- Foreign keys ensure that related data in different tables remains consistent. They prevent actions that could break the logical relationships within your data, like inserting an order with a non-existent customer_id.

--

<span style="color: orange;">Supporting Cascading Actions</span>

- Foreign keys can be set up to cascade certain actions, like ON DELETE CASCADE or ON UPDATE CASCADE. This means that if a record in the parent table is deleted or updated, all related records in the child table will be automatically deleted or updated to match, maintaining consistency.
- Cascading actions can simplify maintenance of related data, reducing the need for complex operations to keep data consistent.

--

<span style="color: orange;">Improving Querying and Logical Structure</span>

- Foreign keys make relationships between tables explicit, which helps both the database engine and developers understand the logical connections within the data.
- They allow you to write queries that utilize these relationships, such as using JOIN operations, which are faster and easier to manage when relationships are clearly defined and enforced.

---

<span style="color: orange;">Example: Primary and Foreign Keys</span>

The customer, order and product chain. Let's be a data engineer.

--

| customer_id | first_name | last_name |
| ----------- | ---------- | --------- |
| 1           | Viktor     | Atalla    |
| 2           | Christoph  | Baldow    |
| 3           | Peter      | Parker    |
| ...         | ...        | ...       |

<span style="color: lightgreen;">Given a customer table, what should the primary key? Do we need a foreign key?</span>

--

| <span style="color: orange;">customer_id</span> | first_name | last_name |
| ----------------------------------------------- | ---------- | --------- |
| 1                                               | Viktor     | Atalla    |
| 2                                               | Christoph  | Baldow    |
| 3                                               | Peter      | Parker    |
| ...                                             | ...        | ...       |

- <span style="color: orange;">Primary Key</span>
- <span style="color: yellow;">Foreign Key</span>

--

<span style="color: lightgreen;">Create some fictitious tables with to goal to efficiently combine orders with customers and products. Define primary and foreign keys for each of the designed tables.</span>

--

Order - Customer - Relation

| <span style="color: orange;">order_id</span> | <span style="color: yellow;">customer_id</span> | date       | gross costs |
| -------------------------------------------- | ----------------------------------------------- | ---------- | ----------- |
| 1                                            | 1                                               | 2024-11-01 | 23.06       |
| 2                                            | 2                                               | 2024-11-05 | 12.74       |
| 3                                            | 1                                               | 2024-10-02 | 31.57       |
| ...                                          | ...                                             | ...        |

- <span style="color: orange;">Primary Key</span>
- <span style="color: yellow;">Foreign Key</span>

--

Order - Product - Relation

| <span style="color: yellow;">order_id</span> | <span style="color: yellow;">product_id</span> | amount |
| -------------------------------------------- | ---------------------------------------------- | ------ |
| 1                                            | 1                                              | 2      |
| 1                                            | 3                                              | 1      |
| 3                                            | 2                                              | 5      |
| ...                                          | ...                                            | ...    |

- <span style="color: orange;">Primary Key</span>
- <span style="color: yellow;">Foreign Key</span>

--

---

<span style="color: red;">Homework: What other key types exists? Explain them!</span>

---

<h3><span style="color: orange;">Different types of databases</span></h>

---

<span style="color: orange;">Relational Databases (rdb)</span>

- all examples up to this point were examples for relational databases
- relational databases are a structured approach to data storage, using tables to organize and link data
- typically implements transactions (ACID)
- based on the relational model

--

**Origins of Relational Databases**

- Developed in the 1970s by Edgar F. Codd at IBM.
- Codd’s Relational Model paper in 1970 laid the foundation.
- Goals: data consistency, ease of use, and support for complex queries.
- Key players: IBM’s System R and Oracle as early adopters.

--

**Relational Model / Core Concepts**

- Table (<span style="color: orange;">Relation</span>): Structure holding rows and columns (like a spreadsheet).
- Rows (<span style="color: orange;">Tuples</span>): Each row represents a unique record.
- Columns (<span style="color: orange;">Attributes</span>): Each column represents a specific property (e.g., “name,” “age”).
- <span style="color: orange;">Primary Key</span>: Unique identifier for each row.
- <span style="color: orange;">Foreign Key</span>: Links rows across different tables.

--

**How Relational Databases Work**

- Data stored in tables; tables linked via keys.
- Relational databases use <span style="color: orange;">SQL (Structured Query Language)</span> to manage data.
- SQL supports CRUD operations (Create, Read, Update, Delete).
- Benefits of structure: reduces redundancy and supports complex data retrieval.

--

**Data Relationships in Relational Databases**

- <span style="color: orange;">One-to-One Relationship</span>: Each record in Table A is linked to one in Table B.
- <span style="color: orange;">One-to-Many Relationship</span>: A single record in Table A relates to multiple records in Table B.
- <span style="color: orange;">Many-to-Many Relationship</span>: Records in Table A relate to multiple records in Table B (typically using a linking table).

--

<span style="color: lightgreen;">What is the relationship?</span>

- order to product
- product to order
- product to manufacturer
- advertisement to product

--

**SQL**

- Core SQL Standard: defines features the rdb should support, e.g. SELECT, INSERT, UPDATE or DELETE
- ANSI/ISO has released multiple versions of SQL over the years: SQL-86, SQL-89, ..., SQL:2023
- Additional Vendor Specific Extensions, e.g. Postgres, Mysql, ...
- **However:** <span style="color: orange;">We concentrate on Pandas. Why? Because Pandas is powerful and more intuitive for beginners!</span>

---

<span style="color: orange;">Document Databases</span>

- one of the main categories of NoSQL databases

---

<span style="color: orange;">Graph Databases</span>

---

#### Others

- Key-Value Stores
- Column-Family Databases
- Time-Series Databases
- Object Databases
- Multimodel Databases
- NewSQL Databases

---

The [Stackoverflow Survey](https://survey.stackoverflow.co/2023/#most-popular-technologies-database) about the most popular databases in 2024

<img
  src="../assets/database_architectures/imgs/imgs.012.png"
  alt="Overview"
  style="
    width: 2400px;
    margin: 0px 0px 0px 0px;
    padding-right: 0rem;
    background: transparent;
  "
/>

---

#### Object storages

https://blog.min.io/databases-for-object-storage/

---

#### Comparison Overview
