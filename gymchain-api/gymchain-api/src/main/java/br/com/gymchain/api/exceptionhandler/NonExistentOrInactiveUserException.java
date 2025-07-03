package br.com.gymchain.api.exceptionhandler;

public class NonExistentOrInactiveUserException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public NonExistentOrInactiveUserException(String message) {
        super(message);
    }
}

