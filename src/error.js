function errorCode(err) {
	if (err.code == "08003") console.log("\n ERROR! \n connection_does_not_exist\n");
	else if (err.code == "08006") console.log("\n ERROR! \n connection_failure\n");
	else if (err.code == "23502") console.log("\n ERROR! \n non-nullable_columns\n");
	else if (err.code == "23505") console.log("\n ERROR! \n duplicate_key_value\n");
	else if (err.code == "28P01") console.log("\n ERROR! \n invalid_password\n");
	else if (err.code == "2F002") console.log("\n ERROR! \n modifying_sql_data_not_permitted\n");
	else if (err.code == "57P03") console.log("\n ERROR! \n cannot_connect_now\n");
	else if (err.code == "42601") console.log("\n ERROR! \n syntax_error\n");
	else if (err.code == "42501") console.log("\n ERROR! \n insufficient_privilege\n");
	else if (err.code == "42602") console.log("\n ERROR! \n invalid_name\n");
	else if (err.code == "42622") console.log("\n ERROR! \n name_too_long\n");
	else if (err.code == "42939") console.log("\n ERROR! \n reserved_name\n");
	else if (err.code == "42703") console.log("\n ERROR! \n undefined_column\n");
	else if (err.code == "42000") console.log("\n ERROR! \n syntax_error_or_access_rule_violation\n");
	else if (err.code == "42P01") console.log("\n ERROR! \n undefined_table\n");
	else if (err.code == "42P02") console.log("\n ERROR! \n undefined_parameter\n");
	else {
		console.error(err.stack);
		console.log(err.code);
	}
}

module.exports = { errorCode };