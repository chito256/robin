package database;

import java.sql.ResultSet;
import java.sql.SqlException;
import org.springframework.jdbc.core.RowMapper;


public class UserMapper{

	public Users mapRow(ResultSet rs, int rowNum) throws SqlException{

		Users u = new Users();
		u.setUserName(rs.getString("user_name"));
		u.setPassword(rs.getString("password"));
		u.setSalt(rs.getString("salt"));
		return u;

	}

}