package security;

//Author: Odd

import java.security.SecureRandom;
import java.security.MessageDigest;
import java.lang.String;
import java.util.Scanner;


public class pwdHandle{

	private static final int SALT_SIZE = 32;

	public static String GenerateSalt(int length){

		byte[] bytes = new byte[length];
		
		SecureRandom random = new SecureRandom();
		random.nextBytes(bytes);

		StringBuffer str = new StringBuffer();
		for (int i = 0; i < bytes.length; i++) {
         	str.append(Integer.toString((bytes[i] & 0xff) + 0x100, 16).substring(1));
        }


		return str.toString();

	}

	public static String GenerateHash(String pwd, String salt) throws Exception{

		byte[] plainPassword = pwd.getBytes();
		byte[] plainSalt = salt.getBytes();

		byte[] plainResult = new byte[plainPassword.length + plainSalt.length];

		for(int i = 0; i < plainPassword.length; i++){

			plainResult[i] = plainPassword[i];

		}

		for(int i = 0; i < plainSalt.length; i++){

			plainResult[plainPassword.length + i] = plainSalt[i];

		}

		MessageDigest md = MessageDigest.getInstance("SHA-256");
		md.update(plainResult);

		plainResult = md.digest();

		StringBuffer str = new StringBuffer();

		for (int i = 0; i < plainResult.length; i++) {
         	str.append(Integer.toString((plainResult[i] & 0xff) + 0x100, 16).substring(1));
        }

		return str.toString();

	}

}