This is a small database-and-language-detection test repository. It contains examples of JSON, SQL, and MongoDB shell syntax, but no application or documented product purpose. The malformed `test.json` also appears intended as a syntax fixture rather than valid configuration data.

### Stack
- **Language(s):** JSON, SQL, JavaScript/MongoDB shell syntax
- **Framework / runtime:** No application framework; MongoDB shell and a MySQL-style SQL environment
- **Notable components:** MongoDB collections, SQL tables, GitHub Linguist `.gitattributes` overrides

## How it's organized

```text
.gitattributes         Controls GitHub language detection for JSON, SQL, and MongoDB files
test.json              JSON syntax test containing a malformed object
testing.sql            MySQL-style metadata checks and a users/orders example
tokobuku.mongo.js      MongoDB seed script for a sample bookstore database
```

**How it fits together:** `tokobuku.mongo.js` creates the `tokobuku_online` MongoDB database, replaces the `kategori` and `buku` collections with dummy bookstore data, and adds text and compound indexes. `testing.sql` demonstrates a separate relational-schema example with `users` and `orders`. The JSON and `.gitattributes` files are repository-level syntax and classification fixtures rather than parts of a runtime.

## How to run it

There is no build system or documented application entry point.

```bash
mongosh tokobuku.mongo.js
```

Before running the MongoDB script, ensure `mongosh` is available and connected to the intended environment. The script drops existing `buku` and `kategori` collections.

The SQL file can be executed through a compatible MySQL-style client, though `SERIAL` and `SHOW ENGINES` should be adjusted for non-MySQL databases.
