package backend.Mapper;

import backend.Dto.ClientDto;
import backend.Entity.Client;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-02-27T21:57:46-0500",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 17.0.11 (Amazon.com Inc.)"
)
@Component
public class IClientMapperImpl implements IClientMapper {

    @Override
    public ClientDto toDto(Client client) {
        if ( client == null ) {
            return null;
        }

        Long id = null;
        String name = null;
        String lastName = null;
        String cellPhone = null;
        String notes = null;

        id = client.getId();
        name = client.getName();
        lastName = client.getLastName();
        cellPhone = client.getCellPhone();
        notes = client.getNotes();

        ClientDto clientDto = new ClientDto( id, name, lastName, cellPhone, notes );

        return clientDto;
    }

    @Override
    public Client toEntity(ClientDto clientDto) {
        if ( clientDto == null ) {
            return null;
        }

        Client client = new Client();

        client.setId( clientDto.id() );
        client.setName( clientDto.name() );
        client.setLastName( clientDto.lastName() );
        client.setCellPhone( clientDto.cellPhone() );
        client.setNotes( clientDto.notes() );

        return client;
    }
}
