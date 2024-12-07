Where are we located during the lecture?

<img
  src="../assets/data_management/imgs/imgs.001.png"
  alt="Overview"
  style="
    width: 800px;
    margin: 0 auto 4rem auto;
    background: transparent;
  "
/>

---

<span style="color: orange;">Outlook</span>

- The focus / goals of data management
- Data management architectures
- Deep-dive into lyvy's lakehouse architecture
- Deep-dive into a realtime architecture
- Viktor CASE

---

<span style="color: orange;">The focus / goals of data management</span>

---

<span style="color: orange;">**Data Quality**</span>

- <span style="color: orange;font-size: 0.9em;">Goal</span>: <span style="font-size: 0.8em;">Ensure the accuracy, consistency, completeness, and reliability of data.</span>
- <span style="color: orange;font-size: 0.9em;">Why It Matters</span>: <span style="font-size: 0.8em;">High-quality data is essential for informed decision-making, reducing errors, and building trust in analytics.</span>
- <span style="color: orange;font-size: 0.9em;">Key Activities</span>:
  - <span style="font-size: 0.8em;">Data cleansing to remove errors or duplicates.</span>
  - <span style="font-size: 0.8em;">Standardizing data formats and enforcing validation rules.</span>
  - <span style="font-size: 0.8em;">Continuous monitoring to detect and address quality issues.</span>

--

<span style="color: orange;">**Data Security**</span>

- <span style="color: orange;font-size: 0.9em;">Goal</span>: <span style="font-size: 0.8em;">Protect data from unauthorized access, breaches, and misuse.</span>
- <span style="color: orange;font-size: 0.9em;">Why It Matters</span>: <span style="font-size: 0.8em;">Data breaches can lead to financial losses, legal consequences, and reputational damage.</span>
- <span style="color: orange;font-size: 0.9em;">Key Activities</span>:
  - <span style="font-size: 0.8em;">Implementing encryption and secure access controls.</span>
  - <span style="font-size: 0.8em;">Regular security audits and vulnerability assessments.</span>
  - <span style="font-size: 0.8em;">Complying with regulations like GDPR, HIPAA, or CCPA.</span>

--

<span style="color: orange;">**Data Accessibility**</span>

- <span style="color: orange;font-size: 0.9em;">Goal</span>: <span style="font-size: 0.8em;">Ensure the right data is available to the right people at the right time.</span>
- <span style="color: orange;font-size: 0.9em;">Why It Matters</span>: <span style="font-size: 0.8em;">Enhances productivity and decision-making by providing timely access to relevant data.</span>
- <span style="color: orange;font-size: 0.9em;">Key Activities</span>:
  - <span style="font-size: 0.8em;">Implementing role-based access control (RBAC).</span>
  - <span style="font-size: 0.8em;">Developing intuitive data catalogs and search tools.</span>
  - <span style="font-size: 0.8em;">Minimizing data silos with integrated platforms.</span>

--

<span style="color: orange;">**Data Governance and Compliance**</span>

- <span style="color: orange;font-size: 0.9em;">Goal</span>: <span style="font-size: 0.8em;">Establish policies and processes for consistent, compliant, and ethical data usage.</span>
- <span style="color: orange;font-size: 0.9em;">Why It Matters</span>: <span style="font-size: 0.8em;">Ensures legal compliance and ethical standards while reducing risk.</span>
- <span style="color: orange;font-size: 0.9em;">Key Activities</span>:
  - <span style="font-size: 0.8em;">Creating data usage policies and training employees.</span>
  - <span style="font-size: 0.8em;">Documenting data lineage to track its origins and transformations.</span>
  - <span style="font-size: 0.8em;">Ensuring audit readiness with proper documentation.</span>

--

<span style="color: orange;">**Scalability**</span>

- <span style="color: orange;font-size: 0.9em;">Goal</span>: <span style="font-size: 0.8em;">Build systems and processes that handle growing data volumes and complexity without degradation in performance.</span>
- <span style="color: orange;font-size: 0.9em;">Why It Matters</span>: <span style="font-size: 0.8em;">Organizations need to adapt to increasing data demands as they grow.</span>
- <span style="color: orange;font-size: 0.9em;">Key Activities</span>:
  - <span style="font-size: 0.8em;">Using scalable storage and compute solutions (e.g., cloud platforms, distributed databases).</span>
  - <span style="font-size: 0.8em;">Implementing efficient ETL pipelines.</span>
  - <span style="font-size: 0.8em;">Designing data architectures for horizontal scaling.</span>

--

Short excursion: Horizontal vs. Vertical scaling.

--

<span style="color: orange;">**Data Integration**</span>

- <span style="color: orange;font-size: 0.9em;">Goal</span>: <span style="font-size: 0.8em;">Seamlessly combine data from multiple sources into a unified view.</span>
- <span style="color: orange;font-size: 0.9em;">Why It Matters</span>: <span style="font-size: 0.8em;">Allows for comprehensive insights and avoids fragmented decision-making.</span>
- <span style="color: orange;font-size: 0.9em;">Key Activities</span>:
  - <span style="font-size: 0.8em;">Using ETL/ELT tools to consolidate data.</span>
  - <span style="font-size: 0.8em;">Maintaining metadata and master data management practices.</span>
  - <span style="font-size: 0.8em;">Standardizing APIs and protocols for data exchange.</span>

--

<span style="color: orange;">**Data Availability and Continuity**</span>

- <span style="color: orange;font-size: 0.9em;">Goal</span>: <span style="font-size: 0.8em;">Minimize downtime and ensure data availability during disruptions.</span>
- <span style="color: orange;font-size: 0.9em;">Why It Matters</span>: <span style="font-size: 0.8em;">Business operations rely on uninterrupted access to critical data.</span>
- <span style="color: orange;font-size: 0.9em;">Key Activities</span>:
  - <span style="font-size: 0.8em;">Implementing redundancy and failover systems.</span>
  - <span style="font-size: 0.8em;">Conducting regular backups and testing recovery processes.</span>
  - <span style="font-size: 0.8em;">Using high-availability systems and disaster recovery plans.</span>

--

<span style="color: orange;">**Usability and Data Democratization**</span>

- <span style="color: orange;font-size: 0.9em;">Goal</span>: <span style="font-size: 0.8em;">Enable non-technical users to access and understand data.</span>
- <span style="color: orange;font-size: 0.9em;">Why It Matters</span>: <span style="font-size: 0.8em;">Promotes data-driven decision-making across all levels of an organization.</span>
- <span style="color: orange;font-size: 0.9em;">Key Activities</span>:
  - <span style="font-size: 0.8em;">Providing self-service BI tools.</span>
  - <span style="font-size: 0.8em;">Creating user-friendly dashboards and visualizations.</span>
  - <span style="font-size: 0.8em;">Offering training on data literacy.</span>

--

<span style="color: orange;">**Usability and Data Democratization**</span>

- <span style="color: orange;font-size: 0.9em;">Goal</span>: <span style="font-size: 0.8em;">Enable non-technical users to access and understand data.</span>
- <span style="color: orange;font-size: 0.9em;">Why It Matters</span>: <span style="font-size: 0.8em;">Promotes data-driven decision-making across all levels of an organization.</span>
- <span style="color: orange;font-size: 0.9em;">Key Activities</span>:
  - <span style="font-size: 0.8em;">Providing self-service BI tools.</span>
  - <span style="font-size: 0.8em;">Creating user-friendly dashboards and visualizations.</span>
  - <span style="font-size: 0.8em;">Offering training on data literacy.</span>

--

<span style="color: orange;">Cost Efficiency</span>

- <span style="color: orange;font-size: 0.9em;">Goal</span>: <span style="font-size: 0.8em;">Minimize expenses related to storing, processing, and managing data while maintaining performance and scalability.</span>
- <span style="color: orange;font-size: 0.9em;">Why It Matters</span>: <span style="font-size: 0.8em;">Reduces operational costs, supports scalability within budget constraints, and enables businesses to allocate resources more effectively to other critical areas.</span>
- <span style="color: orange;font-size: 0.9em;">Key Activities</span>:
  - <span style="color: lightgreen;">It's your turn! What are cost drivers considering data infrastructures?</span>

--

<span style="color: orange;">Summary: data management provides the foundations for (operational) BI</span>

---

<span style="color: orange;">Data management architectures</span>

---

<span style="color: orange;">Data Warehouse</span>

--

<img
  src="../assets/data_management/imgs/imgs.002.png"
  alt="Data Warehouse"
  style="
    width: 1600px;
    margin: 0 auto 4rem auto;
    background: transparent;
  "
/>

--

Pros & Cons

---

<span style="color: orange;">Data Lake</span>

--

<img
  src="../assets/data_management/imgs/imgs.003.png"
  alt="Data Warehouse"
  style="
    width: 1600px;
    margin: 0 auto 4rem auto;
    background: transparent;
  "
/>

--

---

<span style="color: orange;">Hybrid Data Lake</span>

--

<img
  src="../assets/data_management/imgs/imgs.004.png"
  alt="Data Warehouse"
  style="
    width: 1600px;
    margin: 0 auto 4rem auto;
    background: transparent;
  "
/>

--

---

<span style="color: orange;">Data Lakehouse</span>

--

<img
  src="../assets/data_management/imgs/imgs.005.png"
  alt="Data Warehouse"
  style="
    width: 1600px;
    margin: 0 auto 4rem auto;
    background: transparent;
  "
/>

--

---

Don't think of these architectures as being set in stone. They all have advantages and disadvantages
and are applied in modified forms.

---

<span style="color: orange;">Deep-dive into lyvy's lakehouse architecture</span>

---

#### Story

- https://sigma.software/about/media/how-to-choose-the-best-type-of-data-storage-architecture

---

- Finops
- Data Availability (Retention time)
- live vs. prelive / staging vs. live
- snowflake vs. clickhouse
